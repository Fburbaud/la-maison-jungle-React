function Recommandation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    if(!isSpring){
        return <div>Ce n'est pas le moment de rempoter.</div>
    }else{
        return <div>C'est le printemps. Rempotez!🌱</div>
    }
}

export default Recommandation;