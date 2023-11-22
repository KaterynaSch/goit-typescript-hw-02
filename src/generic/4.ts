/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface T {
  title: string;
}
interface Props<T> {
  props: T;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<T> {
  pageInfo () {
    console.log(this.props.title);
  }
}