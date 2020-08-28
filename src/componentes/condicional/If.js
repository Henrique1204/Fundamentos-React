export default (props) => {
    const filhos = props["children"];

    const eleElse = (Array.isArray(filhos)) ? filhos.filter((filho) => filho.type && filho.type.name === "Else")[0] : "";
    const eleIf = (Array.isArray(filhos)) ? filhos.filter((filho) => filho !== eleElse) : filhos;
    
    if (props["teste"]) {
        return eleIf;
    } else if(eleElse) {
        return eleElse;
    } else {
        return false;
    }
}

export const Else = (props) => (props["children"]);
