
import Crousel from "../../components/Crousel/Crousel"
const Home = () => {
  return (
    <>
     <Crousel/>
      <div class="container my-3">
  <h2 class="display-2 ">Hobbies</h2>
  <div class="row justify-content-center">

    <div class="col-md-6 col-lg-4 mb-4 d-flex flex-column">
      <div class="border p-3">
        <h3 class="text-center mb-3">FootBall</h3>
        <img class="img-fluid mb-3"
          src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" />
        <p>
        Football is my favorite hobby, and it is the famous sport too. Football is also called soccer, in North America, South Africa, and Australia. The football game tests my mental as well as your physical strength. The football playing keeps me mind & body strong, fostering camaraderie among players.
        </p>
      </div>
    </div>

    <div class="col-md-6 col-lg-4 mb-4 d-flex flex-column">
      <div class="border p-3">
        <h3 class="text-center mb-3">Reading</h3>
        <img class="img-fluid mb-3"
          src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="" />
        <p>
          You visit a different world every time you read a book.
          It makes you live the life of a protagonist.
          When you're reading, you gain from the knowledge and experiences of someone else.
          Reading fiction often puts you in different places and situations, making you a lot more
          imaginative!
        </p>
      </div>
    </div>
    
    <div class="col-md-6 col-lg-4 mb-4 d-flex flex-column">
      <div class="border p-3">
        <h3 class="text-center mb-3">Cooking</h3>
        <img class="img-fluid mb-3"
          src="https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" />
        <p>
          For older people it's important to have as many hobbies as possible,
          in order to combat any feelings of loneliness and to keep fit and active.
          Cooking can provide you and your loved ones with plenty of benefits,
          and there are many guides and recipes out there to help you perfect your meals.
        </p>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default Home