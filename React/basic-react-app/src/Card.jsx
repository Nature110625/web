export default function Card({data}) {
    const desc=data.description.map((val)=><li>{val}</li>);
    console.log(data);
    return (
        <div class="card">
            <div class="card-details">
                <h4>{data.title}</h4>
                <img src="./assets/img1"></img>
                <ul>
                    {desc}
                </ul>
            </div>
            <div class="card-price">
                <span>{data.oldPrice}</span>
                <span>{data.newPrice}</span>
            </div>
        </div>
    );
}