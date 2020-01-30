import client from 'shared/client';
import { Channel } from 'shared/data/resources';

export function searchCatalog(context, params) {
  params.page_size = params.page_size || 25;
  params.public = true;
  // TODO: Migrate this to using indexeddb
  return Channel.searchCatalog(params).then(pageData => {
    context.commit('SET_PAGE', pageData);
    // Put channel data in our global channels map
    context.commit('channel/ADD_CHANNELS', pageData.results, { root: true });
  });
}

/* INVITATION ACTIONS */
export function loadInvitationList(context) {
  return client
    .get(window.Urls.invitation_list(), { params: { invited: context.rootGetters.currentUserId } })
    .then(response => {
      const invitations = response.data;
      context.commit('SET_INVITATION_LIST', invitations);
      return invitations;
    });
}

export function acceptInvitation(context, invitationId) {
  const invitation = context.getters.getInvitation(invitationId);
  return client
    .delete(window.Urls.invitation_detail(invitationId), { params: { accepted: true } })
    .then(() => {
      context.commit('ACCEPT_INVITATION', invitationId);
      return context.dispatch('loadChannel', invitation.channel_id);
    });
}

export function declineInvitation(context, invitationId) {
  return client.delete(window.Urls.invitation_detail(invitationId)).then(() => {
    context.commit('DECLINE_INVITATION', invitationId);
  });
}
