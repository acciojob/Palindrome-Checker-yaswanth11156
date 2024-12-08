// complete the given function

function palindrome(str){
	const ele = document.getElementById('boolval')
     if(str == str.split().reverse().join('')){
		 return ele.innerText.append("true")
	 }
	else {
	 return ele.innerText.append("false")
	}
}
module.exports = palindrome
