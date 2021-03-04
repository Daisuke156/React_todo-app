export const List = ({Langs}) => {
    return(
        <div>
        { 
        Langs.map((Lang, index) => {
            return <div key={index}>{Lang}</div>;
        })
        }
        </div>
    );
};