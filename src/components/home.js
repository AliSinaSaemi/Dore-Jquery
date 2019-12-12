import React from 'react';

const Home = () => (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1><span>Introduction</span></h1>
            <nav className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="active" aria-current="page" href="/"><span>Home</span></a></li>
                <li className="breadcrumb-item"><a className="active" aria-current="page" href="/docs/gettingstarted"><span>Getting
                      Started</span></a></li>
                <li className="active breadcrumb-item" aria-current="page"><span>Introduction</span></li>
              </ol>
            </nav>
            <div className="separator mb-5"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mb-4 card">
              <div className="card-body">
                <div className="jumbotron">
                  <h1 className="display-4">Welcome!</h1>
                  <p className="lead">Thank you for your interest in Dore jQuery Admin Template.</p>
                  <hr className="my-4"></hr>
                  <p className="mb-5"><b>Item Name:</b> Dore jQuery Admin Template<b> Author:</b> ColoredStrategies<b> Version:</b> 2.3.0</p>
                  <p className="mb-5">This documentation is to help you regarding each step of customization and get you started. Please go through the documentation carefully to understand how this template is made and how to edit it properly. HTML, Sass and jQuery knowledge is required to customize this template.</p>
                  <p className="lead mb-0"><a className="btn btn-primary mr-1" color="primary" href="https://dore-jquery.coloredstrategies.com">View Demo</a><a className="btn btn-outline-primary" color="primary" href="https://themeforest.net/item/dore-jquery-bootstrap-4-admin-dashboard/22604108">View Item</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)


export default Home;