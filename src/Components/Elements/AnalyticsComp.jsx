import React from "react";

const AnalyticsComp = () => {
  return (
    <>
      <div className="container-fluid analytic-fluid py-5">
        <div className="container container-main">
          <div className="row">
            <>
              <div id="list-example" className="list-group">
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-1"
                >
                  Item 1
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-2"
                >
                  Item2
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-3"
                >
                  Item 3
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-4"
                >
                  Item 4
                </a>
              </div>
              <div
                data-spy="scroll"
                data-target="#list-example"
                data-offset={0}
                className="scrollspy-example"
              >
                <h4 id="list-item-1">Item 1</h4>
                <p>...</p>
                <h4 id="list-item-2">Item 2</h4>
                <p>...</p>
                <h4 id="list-item-3">Item 3</h4>
                <p>...</p>
                <h4 id="list-item-4">Item 4</h4>
                <p>...</p>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsComp;
