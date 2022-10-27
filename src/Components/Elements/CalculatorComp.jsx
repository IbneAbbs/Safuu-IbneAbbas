import React from "react";

const CalculatorComp = () => {
  return (
    <>
      <div className="container-fluid calculator-fluid py-5">
        <div className="container container-main">
          <div className="row align-item-center justify-content-center">
            <div className="col-md-10">
              <div className="card-deck">
                <div className="card cal-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <p className="cal-text-heading">Calculator</p>
                        <p className="cal-text-left">Estimate your returns</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 p-3">
                        <div className="card-deck">
                          <div className="card card-heading">
                            <div className="card-body">
                              <h5 className="card-title">SAFUU Price</h5>
                              <p className="card-text">$1.54</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4  p-3">
                        <div className="card-deck">
                          <div className="card card-heading">
                            <div className="card-body">
                              <h5 className="card-title">Current APY</h5>
                              <p className="card-text">383,025.8%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4  p-3">
                        <div className="card-deck">
                          <div className="card card-heading">
                            <div className="card-body">
                              <h5 className="card-title">Your SAFUU Balance</h5>
                              <p className="card-text">0 SAFUU</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row py-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-input-label" htmlFor="formGroupExampleInput">
                            SAFUU Amount
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="0"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-input-label" htmlFor="formGroupExampleInput">
                            APY (%)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="383025.8"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row py-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-input-label" htmlFor="formGroupExampleInput">
                          SAFUU price at purchase ($)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="1.54"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-input-label" htmlFor="formGroupExampleInput">
                          Future SAFUU market price ($)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="1.54"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="card cal-inner-card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 inner-card-col1">
                            <h5 className="inner-last-cardh5">Your initial investment </h5>
                            <h5 className="inner-last-cardh5">Current wealth </h5>
                            <h5 className="inner-last-cardh5">SAFUU rewards estimation </h5>
                            <h5 className="inner-last-cardh5">Potential return </h5>
                          </div>
                          <div className="col-md-6 inner-card-col2">
                          <h5 className="inner-last-cardh5">$0</h5>
                          <h5 className="inner-last-cardh5">$0</h5>
                          <h5 className="inner-last-cardh5">0 SAFUU</h5>
                          <h5 className="inner-last-cardh5">$0</h5>
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

export default CalculatorComp;
