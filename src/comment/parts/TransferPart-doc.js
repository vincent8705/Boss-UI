import ReactDOM from 'react-dom';
import React , { Component }from 'react';
import {Components, Parts, utils} from 'boss-react-ui';
import styles from '../common/style';
import icons from '../common/icon';
import '../../Style/comment.css';
import Code from '../common/Code';

const dom = {};
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
class TransferPartDoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
          confirmDirty: false,
      };
    }
      
    render() {
      const transferOptions = {
        list: [
          { name: 'item1', value: '1,2,3,4,5,6,7' },
          { name: 'item1', value: '2,1,3,4,5,6,7' },
          { name: 'item1', value: '3,2,1,4,5,6,7' },
          { name: 'item1', value: '4,3,2,1,5,6,7' },
          { name: 'item1', value: '5,4,3,2,1,6,7' },
          { name: 'item1', value: '6,5,4,3,2,1,7' },
          { name: 'item1', value: '7,6,5,4,3,2,1' }
        ]
      };
        return(
          <section className="doc">
          <Row>
            <Col span={24}>
              <h2>TransferPart 穿梭器</h2>
            </Col>
            <Col span={24}>
              <h3>基础用法</h3>
            </Col>
            <Col span={16} style={styles.codeBox}>
            <TransferPart {...transferOptions} />
            </Col>
            <Code codes={`import { Parts } from 'boss-react-ui';
const { TransferPart } = Parts;
const transferOptions = {
  list: [
    { name: 'item1', value: '1,2,3,4,5,6,7' },
    { name: 'item1', value: '2,1,3,4,5,6,7' },
    { name: 'item1', value: '3,2,1,4,5,6,7' },
    { name: 'item1', value: '4,3,2,1,5,6,7' },
    { name: 'item1', value: '5,4,3,2,1,6,7' },
    { name: 'item1', value: '6,5,4,3,2,1,7' },
    { name: 'item1', value: '7,6,5,4,3,2,1' }
  ]
};
<TransferPart {...transferOptions} />`} />
          </Row>
          </section>
        );
    }
}
export default TransferPartDoc;