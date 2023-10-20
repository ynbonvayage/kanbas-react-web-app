const AddingAndRemovingDataToFromArrays = () => {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    numberArray1.push(6);
    stringArray1.push('string3');
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);

    return (
        <>
            <h3>Adding and removing data to/from arrays</h3>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
        </>
    )
}

export default AddingAndRemovingDataToFromArrays;