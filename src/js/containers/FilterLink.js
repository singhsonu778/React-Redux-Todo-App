import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
   console.log('FilterLink...mapStateToProps method...' + JSON.stringify(state) + ' ownprops ' + JSON.stringify(ownProps));
   return {
      active: ownProps.filter === state.visibilityFilter
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   console.log('FilterLink...mapDispatchToProps method...' + JSON.stringify(dispatch) + ' ownprops ' + JSON.stringify(ownProps));	
   return {
      onClickHandler: () => {
    	 console.log('FilterLink...mapDispatchToProps method...onClickHandler...');
         dispatch(setVisibilityFilter(ownProps.filter));
      }
   };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
