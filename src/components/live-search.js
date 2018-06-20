import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: props.characters,
            inputValue: ''
        };
    }

    getValue(e) {
        this.setState({
            inputValue: e.currentTarget.value
        });
    }

    render() {
        const filteredCharacters = this.state.characters.filter((character) => character.name.includes(this.state.inputValue));

        return (
            <div className="live-search">
                <SearchForm
                    getValue={(e) => this.getValue(e)}
                />
                <CharacterCount
                    count={filteredCharacters.length}
                />
                <CharacterList
                    characters={filteredCharacters}
                />
            </div>
        );
    }
}
