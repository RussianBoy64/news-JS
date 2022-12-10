import './sources.css';
import { IArticleSouce } from '../../../types/index';

class Sources {
  draw(data: IArticleSouce[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item: IArticleSouce) => {
      const sourceClone = sourceItemTemp!.content.cloneNode(true) as Element;

      sourceClone.querySelector('.source__item-name')!.textContent = item.name;
      sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id!);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')!.append(fragment);
  }
}

export default Sources;
