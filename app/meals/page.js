import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "../components/meals/meals-grid";
import {  MealsDB } from "@/lib/meals";
import { Suspense } from "react";


export async function Meals() {
  const meals = await  MealsDB();
  return <MealsGrid meals={meals} />
}

export default async function MealsPage() {


  return (
    <>
   <header className={classes.header}>
<h1> Super Tasty Meals, Created {' '}
  <span className={classes.highlight}>by you</span>
</h1>
<p>Choose your favorite recipe and cook it yourself, It&apos;s Easy and Fun ! </p>
<p className={classes.cta}>

  <Link href="/meals/share">Share your Fav Recipe</Link>
</p>
   </header>
   <main className={classes.main}>
    <Suspense fallback={<p className={classes.loading}>Fetching Meals....</p>}>
    <Meals />
    </Suspense>
   </main>
   </>
  )
}
