import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import icons from '../common/icon';
import '../../Style/comment.css'

const marginStyle = {
  margin: '10px'
};
const click = function (event) {
  console.log('onclick');
  console.log(event);
  console.log(dom);
  // marginStyle.margin = '40px';
};
const {
    Button,
    Buttons,
    Input,
    DatePicker,
    Textarea,
    Select,
    Selects,
    Radio,
    Checkbox,
    Container,
    Toaster,
    Modal,
    RichEditor,
    Dynamic,
    Loader,
    Tab,
    Grid,
    Row,
    Col,
    Progress,
    FileUp,
    Icon,
    LabelGroup,
    MyTree,
    Tree,
    Carousel,
    Collapse,
    Panel,
    Switch
  } = Components;
  
const { SearchPart, TablePart, DrawPart, EditPart, TransferPart } = Parts;
class Logs extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
        return(
          <section className="doc">
            <Row>
            <Col span={24}>
                <h2>更新日志</h2>
            </Col>
            <Col span={24}>
                <div>当前最新版本1.0.6</div>
            </Col>
          </Row>
        </section>
        );
    }
}
export default Logs;