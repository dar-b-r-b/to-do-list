import DateObject from "react-date-object";

export function Date() { 
    let date = new DateObject();
    return (
        <h2 className="flex justify-end sofadi-one-regular date">{date.toString()}</h2>
    );
}