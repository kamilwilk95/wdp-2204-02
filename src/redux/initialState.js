const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],

  galleryCategories: [
    { id: 'featured', name: 'Featured' },
    { id: 'topSeller', name: 'Top seller' },
    { id: 'saleOff', name: 'Sale off' },
    { id: 'topRated', name: 'Top rated' },
  ],

  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 1.jpg',
      oldPrice: undefined,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'topSeller',
      rating: 1,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 2.jpg',
      oldPrice: undefined,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: true,
      galleryTag: 'topSeller',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 3.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 4.jpg',
      oldPrice: undefined,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 5.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: true,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 6.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 7.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 8.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 9.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 10.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'saleOff',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 11.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'saleOff',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 12.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 13.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 14.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'chair',
      image: '/images/products/Aenean Ru Bristique 15.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      image: '/images/products/Aenean Ru Bristique 16.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 17.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 18.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'sofa',
      image: '/images/products/Aenean Ru Bristique 19.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: true,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'sofa',
      image: '/images/products/Aenean Ru Bristique 20.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 21.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: '/images/products/Aenean Ru Bristique 22.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'dining',
      image: '/images/products/Aenean Ru Bristique 23.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'table',
      image: '/images/products/Aenean Ru Bristique 24.jpg',
      oldPrice: 40,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      comparing: false,
      isFavorite: false,
      galleryTag: 'featured',
      rating: 0,
    },
  ],
  cart: {
    products: [],
  },
  device: {

  },
};

export default initialState;
