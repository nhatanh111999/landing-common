import Button from '@mui/material/Button';

const About = () => {

    return (
        <>
            <div>
                <div className="container">
                    <div className="about-header">
                        <div className="title">
                            About Us
                        </div>
                        <div className="content">
                            Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.
                        </div>
                    </div>
                    <div className="about-detail">
                        <div className="col-4 item1">
                            <h2 className='weight-100'>
                                Productive & Customizable For
                            </h2>
                            <h2 className='weight-600'>
                                Developers
                            </h2>
                            <p className="text-muted mb-3 mt-2">
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil atque corrupti molestiae.
                            </p>
                            <p className="text-muted f-17 item-detail">
                                <div className='icon-item'>
                                    <img src='/icons/menu1.png' url="icon-home" />
                                </div>
                                <div>
                                    Marketing program activities
                                </div>
                            </p>
                            <p className="text-muted f-17 item-detail">
                                <div className='icon-item'>
                                    <img src='/icons/menu1.png' url="icon-home" />
                                </div>
                                <div>
                                    Customization product
                                </div>

                            </p>
                            <p className="text-muted f-17 item-detail">
                                <div className='icon-item'>
                                    <img src='/icons/menu1.png' url="icon-home" />
                                </div>
                                <div>
                                    At vero eos accusamus iusto
                                </div>
                            </p>
                            <Button className='mt-2' variant="outlined" size="small">Read More →</Button>

                        </div>
                        <div className="col-4">
                            <div className="item2">
                                <div className="img-item">
                                    <img src='/icons/about1.png' />
                                </div>
                                <p className="text-muted mt-2 weight-600">
                                    DEVELOPMENT
                                </p>
                                <p className="mt-1 weight-600">
                                    Product Development
                                </p>
                                <p className="text-muted mt-1">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.
                                </p>
                                <Button className='mt-2' variant="outlined" size="small">Read More →</Button>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className="item3">
                                <div className="img-item">
                                    <img src='/icons/about1.png' />
                                </div>
                                <p className="text-muted mt-2 weight-600">
                                    MARKETING
                                </p>
                                <p className="mt-1 weight-600">
                                    Marketing Product
                                </p>
                                <p className="text-muted mt-1">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.
                                </p>
                                <Button className='mt-2' variant="outlined" size="small">Read More →</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;