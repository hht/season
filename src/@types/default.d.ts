type NavigationParams = {
  home: undefined;
  detail: {item: Goods};
};

interface Goods {
  id: number;
  name: string;
  price: number;
  discount?: number;
  manufacturer: string;
  category: string;
  code: string;
}
