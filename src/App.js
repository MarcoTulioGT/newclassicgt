
import Directory from './components/directory/directory.component'


const categories = [
  {
    id: 1,
    title: 'Autos',   
    imageUrl: 'https://cdn.shopify.com/s/files/1/1307/2339/products/FastFuriousHousefront.jpg?v=1658264552',  
  },
  {
    id: 2,
    title: 'Figuras Acción',   
    imageUrl: 'https://bbts1.azureedge.net/site-images/p/2021/11/e5c33afe-30b0-4247-8d95-66eee122c1d0.jpg',  
  },
  {
    id: 3,
    title: 'Princesas',   
    imageUrl: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/files/GridModule_Become_Member_D.jpg?v=1680322920',  
  },
  {
    id: 4,
    title: 'Hotwheels',   
   imageUrl: 'https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HNL29_013.jpg?v=1686764979',  
  },
  {
    id: 5,
    title: 'Jada',   
    imageUrl: 'https://bbts1.azureedge.net/images/p/full/2023/05/ba4ff994-d20c-4a9b-9a05-c3921818dee1.jpg',  
  },
  {
    id: 6,
    title: 'Tortugas Ninja',   
    imageUrl: 'https://bbts1.azureedge.net/site-images/p/2021/11/de9fd1af-99aa-40d4-8f88-a7a3e3f33a2f.jpg',  
  },
  {
    id: 7,
    title: 'Nintendo',   
    imageUrl: 'https://bbts1.azureedge.net/images/p/full/2023/06/5a14177b-60a8-491e-b8dc-c637ff32c5f0.jpg',  
  },
  {
    id: 8,
    title: 'Dragon Ball',   
    imageUrl: 'https://bbts1.azureedge.net/site-images/p/2022/11/00e38b76-13bf-4e0a-916d-1911d9a130d9.jpg',  
  },
  {
    id: 9,
    title: 'Transformers',   
    imageUrl: 'https://bbts1.azureedge.net/site-images/p/2023/05/f516b605-7ccd-493b-ad59-7694a0278dc8.jpg',  
  },
  {
    id: 10,
    title: 'GI Joe',   
    imageUrl: 'https://bbts1.azureedge.net/site-images/p/2021/11/de6afb72-75cb-41f3-8fd1-f8bd475fadda.jpg',  
  },
  {
    id: 10,
    title: 'Power Ranger',   
    imageUrl: 'https://bbts1.azureedge.net/site-images/p/2021/02/858fd3d6-4f95-4676-b0d7-d2e866715b5c.jpg',  
  },
  {
    id: 10,
    title: 'ThunderCats',   
    imageUrl: 'https://bbts1.azureedge.net/images/p/full/2021/11/6ce3de53-3711-4724-a2cc-45c7bcbf75c7.jpg',  
  },

]


const App = () => {
  return (
    <Directory categories={categories} />
  );
};

export default App;
