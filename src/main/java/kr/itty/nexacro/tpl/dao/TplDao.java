package kr.itty.nexacro.tpl.dao;

import java.util.List;
import java.util.Map;

import kr.itty.nexacro.tpl.model.Tpl;

public interface TplDao {

	List<Map<String, Object>> getTplList();

}
