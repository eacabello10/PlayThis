import React, {Component} from "react";

export default class Profile extends Component{

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7 ">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 >User Profile</h4>
                            </div>
                            <div className="panel-body">
                                <div className="box box-info">            
                                    <div className="box-body">
                                        <div className="col-sm-6">
                                            <div  align="center"> 
                                                <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive" />>       
                                                <input id="profile-image-upload" className="hidden" type="file"></input>
                                                <div style="color:#999;" >click here to change profile image</div>
                                            </div>
                                            <br />>
                                        </div>
                                        <div className="col-sm-6">
                                            <h4 style="color:#00b1b1;">Prasad Shankar Huddedar </h4>
                                            <span><p>Aspirant</p></span>            
                                        </div>
                                        <div className="clearfix"></div>
                                        <hr style="margin:5px 0 5px 0;" />>
                                        <div className="col-sm-5 col-xs-6 tital " >First Name:</div>
                                        <div className="col-sm-7 col-xs-6 ">Prasad</div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>
                                        <div className="col-sm-5 col-xs-6 tital " >Middle Name:</div>
                                        <div className="col-sm-7"> Shankar</div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>
                                        <div className="col-sm-5 col-xs-6 tital " >Last Name:</div>
                                        <div className="col-sm-7"> Huddedar</div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>
                                        <div className="col-sm-5 col-xs-6 tital " >Date Of Joining:</div>
                                        <div className="col-sm-7">15 Jun 2016</div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>
                                        <div className="col-sm-5 col-xs-6 tital " >Date Of Birth:</div>
                                        <div className="col-sm-7">11 Jun 1998</div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>
                                        <div className="col-sm-5 col-xs-6 tital " >Place Of Birth:</div>
                                        <div className="col-sm-7">Shirdi</div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>
                                        <div className="col-sm-5 col-xs-6 tital " >Nationality:</div>
                                        <div className="col-sm-7">Indian</div>
                                        <div className="clearfix"></div>
                                        <div className="bot-border"></div>
                                        <div className="col-sm-5 col-xs-6 tital " >Relition:</div>
                                        <div className="col-sm-7">Hindu</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}