import '../index.css'
import Footer from "../shared/components/partials/Footer";

const AboutPage = () =>{
  return(

    <section className='flex justify-center items-center m-24'>
      <div className='inline-block  max-w-4xl'>
        <h2 className='text-center text-4xl font-bold py-6'>About Us</h2>
        <div>
          <p className='text-center leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quod similique perspiciatis laudantium earum ipsa suscipit incidunt dolorem voluptatem. Deserunt beatae consequuntur unde nihil maxime laborum dolore cumque neque ducimus!</p>
          <p className='text-center leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sed numquam. At debitis modi placeat dolore eius ipsam sit nisi doloribus necessitatibus rerum officiis non molestiae, voluptatum nihil! Obcaecati, vel?</p>
        </div>
        <Footer></Footer>
      </div>
   
      
    </section>
   
  );

}
export default AboutPage