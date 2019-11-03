package kr.itty.nexacro.tpl.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

import kr.itty.nexacro.tpl.service.TplService;

@Controller
@RequestMapping("/xapi/tpl")
public class TplController {
	@Autowired
	TplService tplService;
	
	@RequestMapping(value="/list", method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody void getTplList(HttpServletRequest req, HttpServletResponse res) throws PlatformException {

		HttpPlatformRequest pReq = new HttpPlatformRequest(req);
		pReq.receiveData();
		// PlatformData 
		PlatformData in_pData = pReq.getData();
		
		VariableList in_varList = in_pData.getVariableList();
		String sVar1 = in_varList.getString("in_var1");
		DataSet ds = in_pData.getDataSet("in_emp");
		
		List<Map<String, Object>> tplList = tplService.getTplList();
		
		DataSet dsPjtTpl = new DataSet("dsPjtTpl");
		dsPjtTpl.addColumn("PJT_NO" 	,DataTypes.STRING  ,(short)10 );
		dsPjtTpl.addColumn("TPL_P"    	,DataTypes.STRING  ,(short)10 );
		dsPjtTpl.addColumn("TPL_CONS"   ,DataTypes.STRING  ,(short)10 );
		dsPjtTpl.addColumn("TPL_CONT"   ,DataTypes.STRING  ,(short)10 );
		dsPjtTpl.addColumn("TPL_CO"  	,DataTypes.STRING  ,(short)10 );
		dsPjtTpl.addColumn("PJT_TYPE"  	,DataTypes.STRING  ,(short)10 );
		
		for(Map<String, Object> tpl : tplList) {
			int row = dsPjtTpl.newRow();
			dsPjtTpl.set(row ,"PJT_NO"    ,tpl.get("PJT_NO")  );
			dsPjtTpl.set(row ,"TPL_P"     ,tpl.get("TPL_P"));
			dsPjtTpl.set(row ,"TPL_CONS"  ,tpl.get("TPL_CONS")  );
			dsPjtTpl.set(row ,"TPL_CONT"  ,tpl.get("TPL_CONT")   );
			dsPjtTpl.set(row ,"TPL_CO"    ,tpl.get("TPL_CO")   );
			dsPjtTpl.set(row ,"PJT_TYPE"  ,tpl.get("PJT_TYPE"));
		}

	    Integer nErrorCode  = 0;
	    String strErrorMsg = "SUCC";
		PlatformData out_pData = new PlatformData();

		VariableList out_varList = out_pData.getVariableList();
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		out_varList.add("dsPjtTpl" , tplList);
		

		HttpPlatformResponse pRes = new HttpPlatformResponse(res, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		pRes.setData(out_pData);
		pRes.sendData();    

//		NexacroResult result = new NexacroResult();
//        result.addDataSet("dsPjtTpl", tplList);
//        return result;

	}
	
	@RequestMapping(value="/save", method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody void saveTpl(HttpServletRequest req, HttpServletResponse res) throws PlatformException {

		HttpPlatformRequest pReq = new HttpPlatformRequest(req);
		pReq.receiveData();
		// PlatformData 
		PlatformData in_pData = pReq.getData();
		
		VariableList in_varList = in_pData.getVariableList();
		String sVar1 = in_varList.getString("in_var1");
		DataSet ds = in_pData.getDataSet("in_emp");

	    Integer nErrorCode  = 0;
	    String strErrorMsg = "SUCC";
		PlatformData out_pData = new PlatformData();

		VariableList out_varList = out_pData.getVariableList();
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		out_varList.add("out_var"  , sVar1);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(res, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		
		pRes.setData(out_pData);
		
		pRes.sendData();
	}
}
