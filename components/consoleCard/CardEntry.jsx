const CardEntry = ({command, result}) => {
    return(
        <div className="pt-6 tracking-wider font-sans">
            <p>
              {command}
              <br/>
              <span className="text-yellow-500">{result}</span>
            </p>
        </div>
    )
}

export default CardEntry