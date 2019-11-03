package kr.itty.nexacro.tpl.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.itty.nexacro.tpl.dao.TplDao;
import kr.itty.nexacro.tpl.model.Tpl;
import kr.itty.nexacro.tpl.service.TplService;

@Service("tplService")
public class TplServiceImpl implements TplService {
	
	@Autowired
	private TplDao tplDao;
	
	@Override
	public List<Map<String, Object>> getTplList() {
		return tplDao.getTplList();
	}

}
