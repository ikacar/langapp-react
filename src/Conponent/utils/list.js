function List(params) {
    <div>
    <Card className="container">
        <Card.Body>
            <Card.Header>IME LISTE</Card.Header>
            <ListGroup className="list" data-search-on-list="list">
            {exams.map((exam)=>(
            <ListGroup.Item>
                <a href="#">
                PARAMETRI CLANOVA LISTE
                </a>
            </ListGroup.Item>
            ))}
            </ListGroup>
        {/* <Card.Link className="button-close" href="#" onClick={novi exam}>New</Card.Link> */}
        </Card.Body>

    </Card>
</div>
}