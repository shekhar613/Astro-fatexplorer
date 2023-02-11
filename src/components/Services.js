import React from 'react'
import './Assets/Styles/services.css'


export default function Services() {
    return (
        <div className="my-5 container service_section">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kT6d2Ip5ROI64ogsORLSoIBGqvcZaQYb5O9ntHzhGzab0tpVpTlhPj4fUcP8CTvmUhU&usqp=CAU" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Horoscope Matching | Kundli Match for Marriage</h5>
                            <p className="card-text">During Kundli matching, the horoscopes of the bride and groom are matched to ascertain whether their married life will be happy and successful.The main task during Kundli matching is ashta-koota matching that considers 36 points among both the horoscopes.</p>
                            <p className="card-text"><small className="text-muted">Fatexplor</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Remedies of Red Book | Lal Kitab </h5>
                            <p className="card-text">Some examples of remedies prescribed in Lal Kitab are Throwing copper coins in running water, taking blessings of elders by touching their feet, praying and worshiping god and goddesses, refrain from alcohols, offering food to disabled, helping widows, offering food to crows, cows or dogs.</p>
                            <p className="card-text"><small className="text-muted">Fatexplor</small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6Ugls3xsDFQTzNN57IRDcRGX6rHnXQsYyw&usqp=CAU" className="img-fluid rounded-end" alt="..." />
                    </div>
                </div>
            </div>

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.wallpapersafari.com/30/70/eIWfkL.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Analysis of horoscope by KP method</h5>
                            <p className="card-text">In KP system, each planet has its sub lord whose effects are also seen while analysing any horoscope. In case, two planets are placed in one Nakshatra and sub lords are different for each one, then there can be different results experienced.</p>
                            <p className="card-text"><small className="text-muted">Fatexplor</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
