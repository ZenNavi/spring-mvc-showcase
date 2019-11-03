package kr.itty.nexacro.tpl.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.itty.nexacro.tpl.dao.TplDao;
import kr.itty.nexacro.tpl.model.Tpl;

@Repository("tplDao")
public class TplDaoImpl implements TplDao {
	
	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<Map<String, Object>> getTplList(){
		return sqlSession.selectList("getTplList");
	}

}
