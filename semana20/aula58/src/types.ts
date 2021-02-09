export interface User {
	name: string
	balance: number
}

export enum LOCATION {
	USA = "USA",
	BRAZIL = "BRAZIL",
}
  
export enum NACIONALITY {
	BRAZILIAN = "BRAZILIAN",
	AMERICAN = "AMERICAN",
}
  
export interface User_ex3 {
	name: string
	age: number
	nacionality: NACIONALITY
}

export interface Casino {
	name: string
	location: LOCATION
}

export interface Result {
	brazilians: ResultItem
	americans: ResultItem
  }
  
export interface ResultItem {
	allowed: string[]
	unallowed: string[]
}