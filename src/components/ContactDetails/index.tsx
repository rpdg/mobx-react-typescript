import * as React from 'react';
import {Component} from 'react';
import {observer} from 'mobx-react';

import Contact from '../../interfaces/Contact';

import {ProfilePicture} from './ProfilePicture';

@observer
export class ContactDetails extends Component<{selectedContact: Contact}, {}> {
  render() {
    const contact = this.props.selectedContact;

    if (!contact) {
      return <div className="details"></div>
    }

    return (
      <div className="details">
        <header>
          <ProfilePicture contact={contact} />
          <div className="title">
            <h1 className="name">{contact.firstName}&nbsp;{contact.lastName}</h1>
            <div className="subtitle">{contact.nickName}</div>
          </div>
        </header>
        <table>
          <tbody>
            <tr>
              <td>email</td>
              <td>some@example.com</td>
            </tr>
          </tbody>
        </table>
        <footer>
          <div className="left">
            <button>+</button>
          </div>
          <div className="right">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </footer>
      </div>
    )
  }
}