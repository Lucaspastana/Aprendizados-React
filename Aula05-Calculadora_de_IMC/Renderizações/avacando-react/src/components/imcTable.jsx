import Button from "./Button"


const IMCTable = ({data}) => {
    return (
        <div id="result-container">
            <p id="imc-number">Seu Imc:</p>
            <p id="imc-info">Situação atual</p>
            <h3>Confira as classificações:</h3>
            <div className="imc-table">
                <div className="table-header">
                    <h4>IMC</h4>
                    <h4>Classificação</h4>
                    <h4>Obesidade</h4>
                    {data.map((item)=>(
                        <div className="table-data" key={item.info}>
                            <p>{item.classification}</p>
                            <p>{item.info}</p>
                            <p>{item.obesity}</p>
                        </div>/*As key ajudam o React a identificar quais itens sofreram alterações, 
                        foram adicionados ou removidos. As chaves devem ser atribuídas aos elementos dentro do array para dar uma identidade estável 
                        aos elementos:*/
                    ))}
                </div>
            </div>
            <Button id="back-btn" text="voltar"/>
        </div>

    )
}
/*var numeros = [1, 2, 3, 4, 5]; //vetor original

var quadrados = numeros.map(function(item){
   return Math.pow(item, 2); //retorna o item original elevado ao quadrado
});

document.write(quadrados); //imprime 1,4,9,16,25   */
export default IMCTable