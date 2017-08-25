import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App  from './app'
import Index  from './index'
import AllComponent from './AllComponent'
import Bottons from './components/Buttons'
import GridDoc from './components/Grid-doc'
import InputDoc from './components/Input-doc'
import DatepickerDoc from './components/Datepicker-doc'
import RadioDoc from './components/Radio-doc'
import SelectDoc from './components/Select-doc'
import ToatserDoc from './components/Toatser-doc'
import ConfirmDoc from './components/Confirm-doc'
import IconsDoc from './components/Icons-doc'
import ProgressDoc from './components/Progress-doc'
import TabDoc from './components/Tab-doc'
import CollapseDoc from './components/Collapse-doc'
import LabelDoc from './components/Label-doc'
import TreeDoc from './components/Tree-doc'
import CarouselDoc from './components/Carousel-doc'
import FileUpDoc from './components/FileUp-doc'
import SwitchDoc from './components/Switch-doc'
import SearchPartDoc from './parts/SearchPart-doc'
import DrawPartDoc from './parts/DrawPart-doc'
import TransferPartDoc from './parts/TransferPart-doc'
import Info from './info'
import Logs from './logs'

class MyRouter extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <Router history={hashHistory}>
      <Route path={'/'} component={App} />
      <Route path={'index'} component={Index} />
      <Route path={'info'} component={AllComponent} >
        <Route path={'index'} component={Info} />
      </Route>
      <Route path={'logs'} component={AllComponent} >
        <Route path={'index'} component={Logs} />
      </Route>
      <Route path={'component'} component={AllComponent} >
        <Route path={'Button'} component={Bottons} />
        <Route path={'Grid'} component={GridDoc} />
        <Route path={'Input'} component={InputDoc} />
        <Route path={'Datepicker'} component={DatepickerDoc} />
        <Route path={'Button'} component={Bottons} />
        <Route path={'Radio&Checkbox'} component={RadioDoc} />
        <Route path={'Select'} component={SelectDoc} />
        <Route path={'Switch'} component={SwitchDoc} />
        <Route path={'Toaser'} component={ToatserDoc} />
        <Route path={'Confirm'} component={ConfirmDoc} />
        <Route path={'Icons'} component={IconsDoc} />
        <Route path={'Progress'} component={ProgressDoc} />
        <Route path={'Tab'} component={TabDoc} />
        <Route path={'Collapse'} component={CollapseDoc} />
        <Route path={'Label'} component={LabelDoc} />
        <Route path={'Tree'} component={TreeDoc} />
        <Route path={'Carousel'} component={CarouselDoc} />
        <Route path={'FileUp'} component={FileUpDoc} />
      </Route>
      <Route path={'Parts'} component={AllComponent} >
        <Route path={'SearchPart'} component={SearchPartDoc} />
        <Route path={'DrawPart'} component={DrawPartDoc} />
        <Route path={'TransferPart'} component={TransferPartDoc} />
      </Route>
    </Router>
    )
  }
}
export default MyRouter
