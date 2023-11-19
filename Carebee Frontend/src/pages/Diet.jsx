import { useState } from 'react';
import '../assets/css/Diet.css';
import { useEffect } from 'react';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';

const imagess=[
{id:'1',imageName:'food1.jpg',tag:'food',name:'Egg',description: 'Eggs are an inexpensive, widely available and easily digestible source of high-quality protein and contain a significant proportion of leucine, an amino acid that is important for muscle synthesis, as well as many other nutrients of significance for older people, including vitamin D and omega-3 fatty acids.'},
{id:'2',imageName:'fruit1.jpg',tag:'fruit',name:'Cherry',description:'Cherries are a natural source of melatonin, a hormone that can make you sleepy and help you rest better when you do sleep. Since a huge number of seniors battle insomnia and struggle with insufficient sleep it\'s good to know that cherry juice is a national source of melatonin.'},
{id:'3',imageName:'liquid1.jpg',tag:'liquid',name:'Milk',description:'Rich in essential nutrients, milk serves as an excellent source of calcium, which is crucial for maintaining bone health. As individuals age, bone density tends to decrease, and the risk of fractures and osteoporosis increases. Consuming an adequate amount of calcium, found abundantly in milk, can contribute to the preservation of bone mass and help mitigate these concerns.'},
{id:'4',imageName:'food2.jpg',tag:'food'},
{id:'5',imageName:'fruit2.jpg',tag:'fruit',name:'Mango',description:'Aging takes a toll on the immune system, weakening it to an extent where it is no longer able to manage diseases and infections. Mangoes, being a rich source of vitamin A and C and a carotenoid known as beta-carotene can boost immunity in aged individuals.'},
{id:'6',imageName:'food3.jpg',tag:'food'},
{id:'7',imageName:'fruit3.jpg',tag:'fruit',name:'Grapes',description:'Research conducted with elderly individuals with mild cognitive decline found that consuming grapes every day helped preserve healthy metabolic activity in regions of the brain associated with early-stage Alzheimers\' where metabolic decline takes hold.'},
{id:'8',imageName:'fruit4.jpg',tag:'fruit',name:'Strawberry',description:'Strawberries are great for elderly folks! Packed with vitamin C and antioxidants, they help fight diseases and keep the heart healthy. They are also good for bones, containing nutrients that reduce fracture risk. Easy to enjoy and versatile, strawberries support digestion and brain function, making them a tasty and beneficial addition to the diet.'},
{id:'9',imageName:'liquid2.jpg',tag:'liquid',name:'Beetroot juice',description:'Beetroot juice is beneficial for elderly individuals in various ways. Firstly, it promotes heart health by lowering blood pressure and maintaining a healthy cardiovascular system. Additionally, the juice supports cognitive function, potentially reducing the risk of cognitive decline. With its anti-inflammatory properties, beetroot juice helps combat inflammation in the body, offering relief to seniors dealing with inflammatory conditions. Lastly, the fiber content aids in digestion, contributing to a healthy and well-functioning digestive system.'},
{id:'10',imageName:'food4.jpg',tag:'food',name:'Nuts',description:'Nuts are a great addition to the diet for elderly individuals. They contribute to heart health by lowering cholesterol levels and reducing the risk of heart disease. Rich in omega-3 fatty acids, nuts also support brain function, potentially lowering the risk of cognitive decline. Essential nutrients in nuts, such as calcium and magnesium, promote bone health, which is crucial for preventing conditions like osteoporosis.'},
{id:'11',imageName:'liquid3.jpg',tag:'liquid',name:'Gooseberry',description:'Due to its high vitamin C content, Indian gooseberry may have some promising anti-aging benefits. Vitamin C is an antioxidant that can help prevent cellular damage, which may help slow your body\'s natural aging process.'},
{id:'12',imageName:'food5.jpg',tag:'food'},
{id:'13',imageName:'fruit5.jpg',tag:'fruit'},
{id:'14',imageName:'liquid5.jpg',tag:'liquid'},
{id:'15',imageName:'fruit6.jpg',tag:'fruit',name:'Orange',description:'Boosts the body\'s immune system to protect against viruses and germs. Improves iron absorption and fights anemia. Slows age-related macular degeneration (AMD), which can lead to vision loss. Lowers blood pressure and cortisol, the stress hormone.'},
{id:'16',imageName:'liquid4.jpg',tag:'liquid'},

]
function Filter() {
  const [tag,setTag]=useState('fruit');
  const[filteredImages,setFilteredImages]=useState([]);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(()=>{
    tag === 'all'? setFilteredImages(imagess): setFilteredImages(imagess.filter(image => image.tag === tag))
  },
  [tag]
  );
  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };
  return (
    <>
    <Navigation/>
    <Social/>
    <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
    <div className="App" handleSetTag={setTag}>
      <div className='ta'>
      <TagButton name="all" handleSetTag={setTag}/>
      <TagButton name="food" handleSetTag={setTag}/>
      <TagButton name="fruit" handleSetTag={setTag}/>
      <TagButton name="liquid" handleSetTag={setTag}/>
      </div>
      <div className='jm'>
        {filteredImages.map(image=>
        <div key = {image.id} className='mj' onClick={() => openPopup(image)}>
          <img className = ' dj'src={`/imagess/${image.imageName}`} alt="logo"/>
          <p>{image.name}</p>
        </div>
        
        )}
        {popupImage && (
          <div className="popup">
          <img src={`/imagess/${popupImage.imageName}`} alt="popup" />
          <div className="popup-content">
            <p>{popupImage.name}</p>
            <p>Description: {popupImage.description}</p>
          </div>
          <button className='button-29' onClick={closePopup}>Close</button>
        </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

const TagButton=({name,handleSetTag})=>{
  return <button className='tag' onClick={()=> handleSetTag(name)}>{name.toUpperCase()}</button>;
};
export default Filter;
