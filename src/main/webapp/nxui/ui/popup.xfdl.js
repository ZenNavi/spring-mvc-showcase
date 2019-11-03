(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds4Template", this);
            obj._setContents("<ColumnInfo><Column id=\"OPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_P\" type=\"STRING\" size=\"256\"/><Column id=\"USE_C\" type=\"STRING\" size=\"256\"/><Column id=\"USE_S\" type=\"STRING\" size=\"256\"/><Column id=\"USE_W\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OPT_CD\">A</Col><Col id=\"OPT_NM\">A Type</Col><Col id=\"USE_P\">Y</Col><Col id=\"USE_C\">Y</Col><Col id=\"USE_S\">Y</Col><Col id=\"USE_W\">Y</Col></Row><Row><Col id=\"OPT_CD\">B</Col><Col id=\"OPT_NM\">B Type</Col><Col id=\"USE_P\">Y</Col><Col id=\"USE_C\">Y</Col><Col id=\"USE_S\">Y</Col><Col id=\"USE_W\">Y</Col></Row><Row><Col id=\"OPT_CD\">C</Col><Col id=\"OPT_NM\">C Type</Col><Col id=\"USE_P\">Y</Col><Col id=\"USE_C\">Y</Col><Col id=\"USE_S\">N</Col><Col id=\"USE_W\">N</Col></Row><Row><Col id=\"OPT_CD\">D</Col><Col id=\"OPT_NM\">D Type</Col><Col id=\"USE_P\">Y</Col><Col id=\"USE_C\">Y</Col><Col id=\"USE_S\">Y</Col><Col id=\"USE_W\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectType", this);
            obj._setContents("<ColumnInfo><Column id=\"OPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OPT_CD\">USE_ITM</Col><Col id=\"OPT_NM\">내역관리 프로젝트</Col></Row><Row><Col id=\"OPT_CD\">NON_ITM</Col><Col id=\"OPT_NM\">내역관리 대상아님</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPjtTpl", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"SEL_ROW_IDX\" type=\"INT\" size=\"256\" value=\"0\"/><Column id=\"PJT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TPL_A\" type=\"STRING\" size=\"256\"/><Column id=\"TPL_B\" type=\"STRING\" size=\"256\"/><Column id=\"TPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TPL_D\" type=\"STRING\" size=\"256\"/><Column id=\"PJT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PJT_NO\">SE2828</Col><Col id=\"TPL_A\">A</Col><Col id=\"TPL_B\">A</Col><Col id=\"TPL_C\">A</Col><Col id=\"TPL_D\">A</Col><Col id=\"PJT_TYPE\">USE_ITM</Col></Row><Row><Col id=\"PJT_NO\">SE6266</Col><Col id=\"PJT_TYPE\">NON_ITM</Col><Col id=\"TPL_A\"/><Col id=\"TPL_B\"/><Col id=\"TPL_D\">A</Col><Col id=\"TPL_C\"/></Row><Row><Col id=\"PJT_NO\">SE6854</Col><Col id=\"PJT_TYPE\">USE_ITM</Col><Col id=\"TPL_A\">A</Col><Col id=\"TPL_B\">B</Col><Col id=\"TPL_D\">B</Col><Col id=\"TPL_C\">A</Col></Row><Row><Col id=\"PJT_NO\">SE2323</Col><Col id=\"PJT_TYPE\">NON_ITM</Col><Col id=\"TPL_A\"/><Col id=\"TPL_B\"/><Col id=\"TPL_C\"/><Col id=\"TPL_D\">A</Col></Row><Row><Col id=\"TPL_A\">D</Col><Col id=\"TPL_B\">D</Col><Col id=\"TPL_C\">D</Col><Col id=\"TPL_D\">D</Col><Col id=\"PJT_TYPE\">USE_ITM</Col><Col id=\"PJT_NO\">SE7889</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds3Template", this);
            obj._setContents("<ColumnInfo><Column id=\"OPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_P\" type=\"STRING\" size=\"256\"/><Column id=\"USE_C\" type=\"STRING\" size=\"256\"/><Column id=\"USE_S\" type=\"STRING\" size=\"256\"/><Column id=\"USE_W\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OPT_CD\">A</Col><Col id=\"OPT_NM\">A Type</Col><Col id=\"USE_P\">Y</Col><Col id=\"USE_C\">Y</Col><Col id=\"USE_S\">Y</Col><Col id=\"USE_W\">Y</Col></Row><Row><Col id=\"OPT_CD\">B</Col><Col id=\"OPT_NM\">B Type</Col><Col id=\"USE_P\">Y</Col><Col id=\"USE_C\">Y</Col><Col id=\"USE_S\">Y</Col><Col id=\"USE_W\">Y</Col></Row><Row><Col id=\"OPT_CD\">D</Col><Col id=\"OPT_NM\">D Type</Col><Col id=\"USE_P\">Y</Col><Col id=\"USE_C\">Y</Col><Col id=\"USE_S\">Y</Col><Col id=\"USE_W\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdPjtType","10","10",null,"150","10",null,"620","620",null,null,this);
            obj.set_taborder("0");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPjtTpl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"PJT_NO\"/><Cell col=\"1\" text=\"TPL_A\"/><Cell col=\"2\" text=\"TPL_B\"/><Cell col=\"3\" text=\"TPL_C\"/><Cell col=\"4\" text=\"TPL_D\"/><Cell col=\"5\" text=\"PJT_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:PJT_NO\"/><Cell col=\"1\" text=\"bind:TPL_A\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:TPL_B\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:TPL_C\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:TPL_D\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:PJT_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divTemplateFormHeader","10","grdPjtType:10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("box-top");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","180","30",null,null,null,null,null,null,this.divTemplateFormHeader.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트유형");
            obj.set_cssclass("form_header");
            this.divTemplateFormHeader.addChild(obj.name, obj);

            obj = new Radio("PJT_TYPE","Static00:10","4","300","22",null,null,null,null,null,null,this.divTemplateFormHeader.form);
            obj.set_innerdataset("dsProjectType");
            obj.set_codecolumn("OPT_CD");
            obj.set_datacolumn("OPT_NM");
            obj.set_taborder("1");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("내역관리 대상아님");
            obj.set_index("1");
            this.divTemplateFormHeader.addChild(obj.name, obj);

            obj = new Div("divTemplateFormCommon","10","divTemplateFormHeader:0",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("box-body");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","60","60",null,null,null,null,null,null,this.divTemplateFormCommon.form);
            obj.set_taborder("6");
            obj.set_text("도실하");
            obj.set_cssclass("form_header");
            this.divTemplateFormCommon.addChild(obj.name, obj);

            obj = new Static("Static00","Static04:0","0","120","30",null,null,null,null,null,null,this.divTemplateFormCommon.form);
            obj.set_taborder("0");
            obj.set_text("기자재");
            obj.set_cssclass("form_header");
            this.divTemplateFormCommon.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static04:0","180","30",null,null,null,null,null,null,this.divTemplateFormCommon.form);
            obj.set_taborder("1");
            obj.set_text("도급계약");
            obj.set_cssclass("form_header");
            this.divTemplateFormCommon.addChild(obj.name, obj);

            obj = new Radio("TPL_P","Static00:10","4","300","22",null,null,null,null,null,null,this.divTemplateFormCommon.form);
            obj.set_innerdataset("ds4Template");
            obj.set_codecolumn("OPT_CD");
            obj.set_datacolumn("OPT_NM");
            obj.set_taborder("2");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            this.divTemplateFormCommon.addChild(obj.name, obj);

            obj = new Static("Static03","Static04:0","Static00:0","120","30",null,null,null,null,null,null,this.divTemplateFormCommon.form);
            obj.set_taborder("3");
            obj.set_text("공사비/기타외주");
            obj.set_cssclass("form_header");
            this.divTemplateFormCommon.addChild(obj.name, obj);

            obj = new Radio("TPL_CONS","Static03:10","34","300","22",null,null,null,null,null,null,this.divTemplateFormCommon.form);
            obj.set_innerdataset("ds4Template");
            obj.set_codecolumn("OPT_CD");
            obj.set_datacolumn("OPT_NM");
            obj.set_taborder("4");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            this.divTemplateFormCommon.addChild(obj.name, obj);

            obj = new Radio("TPL_CONT","Static01:10","64","300","22",null,null,null,null,null,null,this.divTemplateFormCommon.form);
            obj.set_codecolumn("OPT_CD");
            obj.set_datacolumn("OPT_NM");
            obj.set_innerdataset("ds3Template");
            obj.set_taborder("5");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            this.divTemplateFormCommon.addChild(obj.name, obj);

            obj = new Button("btnSave","229","330","182","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("divTemplateFormCO","10","divTemplateFormCommon:0",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("box-bottom");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","180","30",null,null,null,null,null,null,this.divTemplateFormCO.form);
            obj.set_taborder("0");
            obj.set_text("작업지시서");
            obj.set_cssclass("form_header");
            this.divTemplateFormCO.addChild(obj.name, obj);

            obj = new Radio("TPL_CO","Static02:10","4","300","22",null,null,null,null,null,null,this.divTemplateFormCO.form);
            obj.set_innerdataset("ds3Template");
            obj.set_taborder("1");
            obj.set_codecolumn("OPT_CD");
            obj.set_datacolumn("OPT_NM");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            this.divTemplateFormCO.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.divTemplateFormHeader
                p = rootobj.divTemplateFormHeader.form;

                p.Static00.set_taborder("0");
                p.Static00.set_text("프로젝트유형");
                p.Static00.set_cssclass("form_header");
                p.Static00.move("0","0","180","30",null,null);

                p.PJT_TYPE.set_taborder("1");
                p.PJT_TYPE.set_innerdataset("dsProjectType");
                p.PJT_TYPE.set_codecolumn("OPT_CD");
                p.PJT_TYPE.set_datacolumn("OPT_NM");
                p.PJT_TYPE.set_direction("vertical");
                p.PJT_TYPE.set_fittocontents("width");
                p.PJT_TYPE.set_index("1");
                p.PJT_TYPE.move("Static00:10","4","300","22",null,null);
                // this.divTemplateFormHeader }}


                // {{ this.divTemplateFormCommon
                p = rootobj.divTemplateFormCommon.form;

                p.Static04.set_taborder("6");
                p.Static04.set_text("도실하");
                p.Static04.set_cssclass("form_header");
                p.Static04.move("0","0","60","60",null,null);

                p.Static00.set_taborder("0");
                p.Static00.set_text("기자재");
                p.Static00.set_cssclass("form_header");
                p.Static00.move("Static04:0","0","120","30",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("도급계약");
                p.Static01.set_cssclass("form_header");
                p.Static01.move("0","Static04:0","180","30",null,null);

                p.TPL_P.set_taborder("2");
                p.TPL_P.set_innerdataset("ds4Template");
                p.TPL_P.set_codecolumn("OPT_CD");
                p.TPL_P.set_datacolumn("OPT_NM");
                p.TPL_P.set_direction("vertical");
                p.TPL_P.set_fittocontents("width");
                p.TPL_P.move("Static00:10","4","300","22",null,null);

                p.Static03.set_taborder("3");
                p.Static03.set_text("공사비/기타외주");
                p.Static03.set_cssclass("form_header");
                p.Static03.move("Static04:0","Static00:0","120","30",null,null);

                p.TPL_CONS.set_taborder("4");
                p.TPL_CONS.set_innerdataset("ds4Template");
                p.TPL_CONS.set_codecolumn("OPT_CD");
                p.TPL_CONS.set_datacolumn("OPT_NM");
                p.TPL_CONS.set_direction("vertical");
                p.TPL_CONS.set_fittocontents("width");
                p.TPL_CONS.move("Static03:10","34","300","22",null,null);

                p.TPL_CONT.set_taborder("5");
                p.TPL_CONT.set_innerdataset("ds3Template");
                p.TPL_CONT.set_codecolumn("OPT_CD");
                p.TPL_CONT.set_datacolumn("OPT_NM");
                p.TPL_CONT.set_direction("vertical");
                p.TPL_CONT.set_fittocontents("width");
                p.TPL_CONT.move("Static01:10","64","300","22",null,null);
                // this.divTemplateFormCommon }}


                // {{ this.divTemplateFormCO
                p = rootobj.divTemplateFormCO.form;

                p.Static02.set_taborder("0");
                p.Static02.set_text("작업지시서");
                p.Static02.set_cssclass("form_header");
                p.Static02.move("0","0","180","30",null,null);

                p.TPL_CO.set_taborder("1");
                p.TPL_CO.set_innerdataset("ds3Template");
                p.TPL_CO.set_codecolumn("OPT_CD");
                p.TPL_CO.set_datacolumn("OPT_NM");
                p.TPL_CO.set_direction("vertical");
                p.TPL_CO.set_fittocontents("width");
                p.TPL_CO.move("Static02:10","4","300","22",null,null);
                // this.divTemplateFormCO }}
                p = rootobj;
                p.set_titletext("New Form");

                p.grdPjtType.set_taborder("0");
                p.grdPjtType.set_autosizebandtype("body");
                p.grdPjtType.set_autosizingtype("none");
                p.grdPjtType.set_autofittype("col");
                p.grdPjtType.set_binddataset("dsPjtTpl");
                p.grdPjtType.set_minwidth("620");
                p.grdPjtType.set_maxwidth("620");
                p.grdPjtType.move("10","10",null,"150","10",null);

                p.divTemplateFormHeader.set_taborder("1");
                p.divTemplateFormHeader.set_cssclass("box-top");
                p.divTemplateFormHeader.set_text("");
                p.divTemplateFormHeader.move("10","grdPjtType:10",null,"30","10",null);

                p.divTemplateFormCommon.set_taborder("2");
                p.divTemplateFormCommon.set_cssclass("box-body");
                p.divTemplateFormCommon.set_visible("false");
                p.divTemplateFormCommon.move("10","divTemplateFormHeader:0",null,"90","10",null);

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("저장");
                p.btnSave.move("229","330","182","32",null,null);

                p.divTemplateFormCO.set_taborder("3");
                p.divTemplateFormCO.set_cssclass("box-bottom");
                p.divTemplateFormCO.set_visible("false");
                p.divTemplateFormCO.move("10","divTemplateFormCommon:0",null,"30","10",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("1");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("popup","",480,640,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popup.xfdl", function() {

        this.popup_onload = function(obj,e)
        {
        	this.fnLoadData();
        	this.fnSetPrtType();
        };

        this.fnSetPrtType = function(){
        	selRowIdx = this.grdPjtType.getSelectedRows();
         	this.divTemplateFormHeader.form.PJT_TYPE.set_value(this.dsPjtTpl.getColumn(selRowIdx, "PJT_TYPE"));
         	this.divTemplateFormCommon.form.TPL_P.set_value(this.dsPjtTpl.getColumn(selRowIdx, "TPL_A"));
         	this.divTemplateFormCommon.form.TPL_CONS.set_value(this.dsPjtTpl.getColumn(selRowIdx, "TPL_B"));
         	this.divTemplateFormCommon.form.TPL_CONT.set_value(this.dsPjtTpl.getColumn(selRowIdx, "TPL_C"));
         	this.divTemplateFormCO.form.TPL_CO.set_value(this.dsPjtTpl.getColumn(selRowIdx, "TPL_D"));

        	this.fnPjtTypeToggle();
        };

        this.fnPjtTypeToggle = function(){

        	pjtType = this.divTemplateFormHeader.form.PJT_TYPE.value;

        	if( pjtType == "USE_ITM" ) {
        		this.divTemplateFormCommon.set_height(90);
        		this.divTemplateFormCommon.set_visible(true);
        		this.divTemplateFormCO.set_visible(true);
        		this.divTemplateFormCO.set_top("divTemplateFormHeader:90");
        	} else {
        		this.divTemplateFormCommon.set_height(0);
        		this.divTemplateFormCommon.set_visible(false);
        		this.divTemplateFormCO.set_visible(true);
        		this.divTemplateFormCO.set_top("divTemplateFormHeader:0");
        	}

        };

        this.divTemplateFormHeader_PJT_TYPE_onitemchanged = function(obj,e)
        {
        	selRowIdx = this.grdPjtType.getSelectedRows();
        	pjtType = this.divTemplateFormHeader.form.PJT_TYPE.value;

        	this.dsPjtTpl.setColumn(selRowIdx, "PJT_TYPE", pjtType);
        	this.fnPjtTypeToggle();
        };

        this.divTemplateForm_TPL_onitemchanged = function(obj,e)
        {
        	strNm     = obj.name;
        	strVal    = obj.value;
        	prtType   = this.divTemplateFormHeader.form.PJT_TYPE.value;

        	selRowIdx = this.grdPjtType.getSelectedRows();

        	if( strNm == "TPL_CONS" || strNm == "TPL_CO" ) {
        		this.divTemplateFormCO.form.TPL_CO.set_value(strVal);
        		this.divTemplateFormCommon.form.TPL_CONS.set_value(strVal);
        	}

        	if( strVal == "D" ) {
        		this.divTemplateFormCommon.form.TPL_P.set_value(strVal);
        		this.divTemplateFormCommon.form.TPL_CONS.set_value(strVal);
        		this.divTemplateFormCommon.form.TPL_CONT.set_value(strVal);
        		this.divTemplateFormCO.form.TPL_CO.set_value(strVal);
        	} else if ( strVal == "C" ) {
        		this.divTemplateFormCommon.form.TPL_P.set_value(strVal);
        		this.divTemplateFormCommon.form.TPL_CONS.set_value(strVal);
        		this.divTemplateFormCommon.form.TPL_CONT.set_value("A");
        		this.divTemplateFormCO.form.TPL_CO.set_value("A");
        	} else if ( strVal == "B" || strVal == "A" ) {
        		if( this.divTemplateFormCommon.form.TPL_CONT.value == "D" || this.divTemplateFormCommon.form.TPL_CONT.value == "C" ) {
        			this.divTemplateFormCommon.form.TPL_CONT.set_value(strVal);
        		}
        		if( this.divTemplateFormCO.form.TPL_CO.value == "D" || this.divTemplateFormCO.form.TPL_CO.value == "C" ) {
        			this.divTemplateFormCO.form.TPL_CO.set_value(strVal);
        		}
        		if( this.divTemplateFormCommon.form.TPL_CONS.value == "D" || this.divTemplateFormCommon.form.TPL_CONS.value == "C" ) {
        			this.divTemplateFormCommon.form.TPL_CONS.set_value(strVal);
        		}
        		if( this.divTemplateFormCommon.form.TPL_P.value == "D" || this.divTemplateFormCommon.form.TPL_P.value == "C" ) {
        			this.divTemplateFormCommon.form.TPL_P.set_value(strVal);
        		}
        	}

        	tplA = this.divTemplateFormCommon.form.TPL_P.value;
        	tplB = this.divTemplateFormCommon.form.TPL_CONS.value;
        	tplC = this.divTemplateFormCommon.form.TPL_CONT.value;
        	tplD = this.divTemplateFormCO.form.TPL_CO.value;

        	this.dsPjtTpl.setColumn(selRowIdx, "TPL_A", tplA);
        	this.dsPjtTpl.setColumn(selRowIdx, "TPL_B", tplB);
        	this.dsPjtTpl.setColumn(selRowIdx, "TPL_C", tplC);
        	this.dsPjtTpl.setColumn(selRowIdx, "TPL_D", tplD);

        };

        this.grdPjtType_oncellclick = function(obj,e)
        {

        	selRowIdx = this.grdPjtType.getSelectedRows();
        	pjtType   = this.dsPjtTpl.getColumn(selRowIdx, "PJT_TYPE");
        	this.divTemplateFormHeader.form.PJT_TYPE.set_value(pjtType);

        	this.fnSetPrtType();
        };

        this.fnCallback = function(svcId,errCd,errMsg) {
        	console.log( arguments );
        	switch(svcId){
        		case "TplListSvc":
        		break;
        		case "TplSaveSvc":
        		break;
        	}
        	this.alert(errMsg);
        };

        this.fnLoadData = function(){
        	this.tran
        	this.transaction("TplListSvc", "SvcUrl::tpl/list", "", "dsPjtTpl=dsPjtTpl", "", "fnCallback");
        };

        this.btnSave_onclick = function(obj,e)
        {
        	this.transaction("TplSaveSvc", "SvcUrl::tpl/save","","dsPjtTpl=dsPjtTpl","","fnCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.popup_onload,this);
            this.grdPjtType.addEventHandler("oncellclick",this.grdPjtType_oncellclick,this);
            this.divTemplateFormHeader.form.PJT_TYPE.addEventHandler("onitemchanged",this.divTemplateFormHeader_PJT_TYPE_onitemchanged,this);
            this.divTemplateFormCommon.form.TPL_P.addEventHandler("onitemchanged",this.divTemplateForm_TPL_onitemchanged,this);
            this.divTemplateFormCommon.form.TPL_CONS.addEventHandler("onitemchanged",this.divTemplateForm_TPL_onitemchanged,this);
            this.divTemplateFormCommon.form.TPL_CONT.addEventHandler("onitemchanged",this.divTemplateForm_TPL_onitemchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divTemplateFormCO.form.TPL_CO.addEventHandler("onitemchanged",this.divTemplateForm_TPL_onitemchanged,this);
        };

        this.loadIncludeScript("popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
