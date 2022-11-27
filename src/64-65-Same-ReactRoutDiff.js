
/*   No difference in their Output 



1)

Component   Already hai , whenever u click , the componenet that u requsting it will call agian , yeh us componenent ko hta k vapis se 
component ko call kr rha hai  , Means it is calling a new component every time

if u want so that when u click will show this page , without reloading   no use of props  use componenets     
        also props can be pass with the help of components

        

    <Route exact path="/" component = { () => { <About name="About page" /> } }; 



            //  for to get props ,,    in about page   
            
            
            const About = (props) => {
                return(
                    <>
                    <h1> I am a {props.name} Page.
                    </>

                )
            }

2)

Render = for first time call it will call the component , but when u click 2 nd time or more then it will only try to update it
 if it is same then it will not called the component again , but simply usi ko render krva dega
    Sirf pheli baar call hoga 

    but in compo - when u click it will call fresh the component 

    // if props have to pass , use render 

    <Route exact path="/contact" render = { () => {<Contact name="contact page" />}};




*/