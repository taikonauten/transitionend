
function onTransitionEnd(propertyName: string, resolve: (value: unknown) => void, e: TransitionEvent): void {
  if (e.propertyName === propertyName) {
    resolve(true);
  }
}

export default function(target: string|HTMLElement|Node|NodeList, propertyName: string): Promise<void[]> {
  let nodes: NodeListOf<Element>|Node[]|HTMLElement|NodeList;
  const promises: Array<Promise<void>> = [];

  if (typeof target === 'string') {
    nodes = document.querySelectorAll(target);
  } else if (target instanceof Node) {
    nodes = [target];
  } else if (target instanceof HTMLElement) {
    nodes = [target];
  } else if (target instanceof NodeList) {
    nodes = target;
  } else {
    console.error('transitionend: invalid target');

    return Promise.reject();
  }

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i] as Node;
    let listener: EventListener;

    promises.push(new Promise((resolve, reject) => {
      listener = onTransitionEnd.bind(null, propertyName, resolve) as EventListener;
      node.addEventListener('transitionend', listener);
    }).then(() => {
      node.removeEventListener('transitionend', listener);
    }));
  }

  return Promise.all(promises);
}
