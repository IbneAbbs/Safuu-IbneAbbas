import React from "react";

const AnalyticsComp = () => {
  return (
    <>
        <div className="container-main">
          <div className="row px-4 pt-5">
            <div className="col-md-4">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      How much you have invested so far?
                    </h5>
                    <i class="bi bi-emoji-smile emojis"></i>
                    <p className="card-text">Total Investment</p>
                    <button
                      type="button"
                      className="btn btn-secondary investment-btn btn-lg ms-2 me-2"
                    >
                      $0
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Risk Meter</h5>
                    <div className="">
                    <img className="img-fluid" src="assets/risk-meter.png" alt="" width={260} />
                    {/* <img className="img-fluid" src="assets/needle-meeter.png" alt="" width={200} /> */}
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      How much you have withdrawn so far?
                    </h5>
                    <i class="bi bi-emoji-frown emojis"></i>
                    <p className="card-text">Total Earned</p>
                    <button
                      type="button"
                      className="btn btn-secondary investment-btn btn-lg ms-2 me-2"
                    >
                      $0
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row px-4 pb-5">
            <div className="col-md-12">
              <div className="card-deck">
                <div className="card analytic-card-last">
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg ms-2 me-2"
                    >
                      Recent Trading history
                    </button>
                    <ul className="list-unstyled d-flex border-bottom">
                      <li>Transaction Hash</li>
                      <li>Block Number</li>
                      <li>Method</li>
                      <li>Date</li>
                      <li>Amount</li>
                      <li>$ SAFUU</li>
                      <li>$ BNB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default AnalyticsComp;
