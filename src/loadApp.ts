/**
 * 该文件仅用于演示，可删除或者根据自己想在本地启动时做一些其他工作而调整
 */
import monacoPython from './entrance/libProperties';


function forceRender() {
  let con = document.getElementById('container');
  if (!con) {
    con = document.createElement('div');
    con.id = 'container';
    con.setAttribute('style', 'width: 80vh; height: 80vh;')
    document.body.append(con);
  }
  
  monacoPython.setup(con)
}

forceRender();
