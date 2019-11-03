package kr.itty.nexacro;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

@Controller
public class ProjectMgmtController {
	
	@RequestMapping("/xapi/tplsave")
	public @ResponseBody void tplsave(HttpServletRequest req, HttpServletResponse res) throws PlatformException {
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
	
	
	@RequestMapping("/xapi/tpllist")
	public @ResponseBody String tpllist() {
		return "Hello List world!";
	}
}
