import { User, Result, Casino, User_ex3, LOCATION, NACIONALITY } from './types'

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}

export function verifyAge(casino: Casino, users: User_ex3[]): Result {
	const allowed: User_ex3[] = [];
	const unallowed: User_ex3[] = [];
  
	for (const user of users) {
	  if (casino.location === LOCATION.USA) {
		if (user.age >= 21) {
		  allowed.push(user)
		} else {
		  unallowed.push(user)
		}
	  } else if (casino.location === LOCATION.BRAZIL) {
		if (user.age >= 18) {
		  allowed.push(user)
		} else {
		  unallowed.push(user)
		}
		break;
	  }
	}
  
	return {
	  brazilians: {
		allowed: allowed
		  .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
		  .map((user) => user.name),
		unallowed: unallowed
		  .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
		  .map((user) => user.name),
	  },
	  americans: {
		allowed: allowed
		  .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
		  .map((user) => user.name),
		unallowed: unallowed
		  .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
		  .map((user) => user.name),
	  }
	}

}