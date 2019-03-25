



/*
 * ------------------------------------------
 * 主界面布局模块基类实现文件
 *
 * ------------------------------------------
 */
NEJ.define([
  'base/klass',
  'base/element',
  'util/template/tpl',
  'util/dispatcher/module',
  '{pro}module/module.js',
  '{pro}util/util.js'
  // 'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'
],function(_k,_e,_t0,_t1,_m,_u,_p){


  function currentTime(){ 
  var d=new Date(),str=''; 
  str+=d.getFullYear()+'年'; 
  str+=d.getMonth() + 1+'月'; 
  str+=d.getDate()+'日'; 
  str+=d.getHours()+'时'; 
  str+=d.getMinutes()+'分'; 
  str+= d.getSeconds()+'秒'; 
  return str; 
} 
setInterval(function(){jQuery('#time').html(currentTime)},1000); 
  // variable declaration
  var _pro;
  /**
   * 项目模块基类对象
   * @class   {_$$ModuleLayoutSystem}
   * @extends {_$$Module}
   * @param   {Object}  可选配置参数，已处理参数列表如下所示
   */
  _p._$$ModuleLayoutSystemApp = _k._$klass();
  _pro = _p._$$ModuleLayoutSystemApp._$extend(_m._$$Module);
  /**
   * 解析模块所在容器节点
   * @param  {Object} 配置信息
   * @return {Node}   模块所在容器节点
   */

  _pro.__doParseParent = function(_options){
    return _e._$get('module-box');
  };
  /**
   * 构建模块
   * @return {Void}
   */
  _pro.__doBuild = function(){
    this.__body = _e._$html2node(
      _t0._$getTextTemplate('module-id-l0')
    );
    var _list = _e._$getByClassName(this.__body,'j-flag');
    this.__export = {
      'input-box': _list[0],
      parent: _list[1],
      'todo-filter': _list[2],
    };
  };

  _pro.__onShow = function(_options) {
    this.__super(_options);
    // 注释掉的
    this.__doPublishMessage(     
      'filter',
      {
        _umi: _options.umi
      }
    );
  };
  // notify dispatcher
  _t1._$regist('layout-system-app',_p._$$ModuleLayoutSystemApp);
});