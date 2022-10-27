import React from "react";

const AccountComp = () => {
  return (
    <>
      <div className="container-fluid account-fluid py-5">
        <div className="container container-main">
          <div className="row">
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Your Balance</h5>
                    <p className="card-text-account">$0</p>
                    <p className="card-text2">0 SAFUU</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">APY</h5>
                    <p className="card-text-account">383,025.8%</p>
                    <p className="card-text2">Daily ROI 2.28%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-3">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Next Rebase:</h5>
                    <p className="card-text-account">js timer</p>
                    <p className="card-text2">Rebasing...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card-deck">
                <div className="card account-card">
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-5">
                          <p className="card-text-left">Current SAFUU Price</p>
                          <p className="card-text-left">Next Reward Amount</p>
                          <p className="card-text-left">
                            Next Reward Amount USD
                          </p>
                          <p className="card-text-left">Next Reward Yield</p>
                          <p className="card-text-left">ROI(1-Day Rate) USD</p>
                          <p className="card-text-left">ROI(5-Day Rate)</p>
                          <p className="card-text-left">ROI(5-Day Rate) USD</p>
                        </div>
                        <div className="col-md-2" />
                        <div className="col-md-5 text-end">
                          <p className="card-text-right">$1.56</p>
                          <p className="card-text-right">0 SAFUU</p>
                          <p className="card-text-right">$0</p>
                          <p className="card-text-right">0.02355%</p>
                          <p className="card-text-right">$0</p>
                          <p className="card-text-right">11.96%</p>
                          <p className="card-text-right">$0</p>
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

export default AccountComp;
