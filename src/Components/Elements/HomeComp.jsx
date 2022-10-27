import React from "react";

const HomeComp = () => {
  return (
    <>
      <div className="container-fluid home-fluid py-5">
        <div className="container container-main">
          <div className="row py-3">
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Market Value of Treasury Asset
                    </h5>
                    <p className="card-text">$58,991,303</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total Supply</h5>
                    <p className="card-text">61,634,066.59</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Circulating Supply</h5>
                    <p className="card-text">45,338,028.42</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card mid-card">
                  <div className="card-body">
                    <button className="btn btn-primary mb-3">SAFUU PRICE</button>
                    <p className="card-text">$9,256,441</p>
                    <div className="card-footer">
                      <h5 className="card-title">Rebasing...</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">SAFUU Insurance Fund Value</h5>
                    <p className="card-text">$8,231</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">MarketCap</h5>
                    <p className="card-text">$71,142,609</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Pool Value</h5>
                    <p className="card-text">$9,256,441</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"># Value of FirePit</h5>
                    <p className="card-text">16,296,070.97 SAFUU</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">$ Value of FirePit</h5>
                    <p className="card-text">$25,552,564</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">% FirePit : Supply</h5>
                    <p className="card-text">26.44%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComp;
