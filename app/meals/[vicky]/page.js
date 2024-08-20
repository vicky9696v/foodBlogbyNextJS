
import Image from "next/image"
import classes from "./page.module.css"
import { notFound } from "next/navigation"
import { getMeals } from "@/lib/meals"


export async function  generateMetadata ({params}) {
    const meal = getMeals(params.vicky)
  if(!meal) {
    notFound();
  }
    return {
      title: meal.title,
      description: meal.summary
    }
  }


export default function BlogMealsFuction({params}) {
    console.log(params)
    const meal = getMeals(params.vicky)
    if(!meal) {
        notFound()
    }
    meal.instructions = meal.instructions.replace(/\n/g, <br />)
 
 
    return (
        <>
           <header className={classes.header}>
            <div className={classes.image}>
                <Image fill src={meal.image} alt="Meal Image" />
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                by <a href={`mailto: ${'EMAIL'}`}></a>{meal.creator}</p>
                <p className={classes.summary}>{meal.summary}</p>

            </div>
           </header>
           <main>
              <p className={classes.instructions}
               dangerouslySetInnerHTML={{
                __html: meal.instructions
               }}></p>
           </main>
        </>
    )
}