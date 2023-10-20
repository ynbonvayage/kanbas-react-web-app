import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndexFunction from "./FindIndexFunction";
import FilterFunction from "./FilterFunction";

const WorkingWithArrays = () => {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped, constant1, numberArray1, stringArray1
    ];

    return (
        <>
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JsonStringify />
            <FindFunction />
            <FindIndexFunction />
            <FilterFunction />
        </>
    )
}

export default WorkingWithArrays;
