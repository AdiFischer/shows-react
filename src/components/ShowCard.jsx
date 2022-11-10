export default function ShowCard({thisShow}){
    return(
        <div className="shows">
            <h3>{thisShow.title}</h3>
            <p>{thisShow.year}</p>

        </div>
    )
}