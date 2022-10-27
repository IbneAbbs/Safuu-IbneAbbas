import React from "react";

const SwapComp = () => {
  return (
    <>
      <div className="container-fluid swap-fluid py-5">
        <div className="container container-main">
          <div className="row align-item-center justify-content-center">
            <div className="col-md-7 p-1">
              <div className="card-deck">
                <div className="card swap-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <p className="swap-text-left">S w a p</p>
                        <p className="swap-text-left">
                          Fast, Secure, KYC-Free.
                        </p>
                      </div>
                      <div className="col-md-4 swap-col2">
                        <i class="bi bi-arrow-clockwise"></i>
                        <i className="bi bi-gear ps-3"></i>
                      </div>
                    </div>

                    <div className="card swap-inner-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 inner-card-col1">
                            <h5 className="inner-cardh5">From:</h5>
                            <p className="inner-cardp">0.00</p>
                          </div>
                          <div className="col-md-6 inner-card-col2">
                            <p className="inner-cardp text-white">Balance: 0</p>
                            <p className="inner-cardp">dropdown</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card swap-inner-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 inner-card-col1">
                            <h5 className="inner-cardh5">To:</h5>
                            <p className="inner-cardp">0.00</p>
                          </div>
                          <div className="col-md-6 inner-card-col2">
                            <p className="inner-cardp text-white">Balance: 0</p>
                            <p className="inner-cardp">dropdown</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-secondary btn-lg swap-card-btn"
                    >
                      Connect Wallet
                    </button>

                    <div className="card swap-inner-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 inner-card-col1">
                            <h5 className="inner-cardh5">From:</h5>
                            <p className="inner-cardp">0.00</p>
                          </div>
                          <div className="col-md-6 inner-card-col2">
                            <p className="inner-cardp text-white">Balance: 0</p>
                            <p className="inner-cardp">dropdown</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default SwapComp;
