import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import DevicePendingList from '@/components/device/DevicePendingList';
import Vuetify from 'vuetify';

describe('DevicePendingList', () => {
  const localVue = createLocalVue();
  const vuetify = new Vuetify();
  localVue.use(Vuex);
  localVue.filter('moment', () => {});

  let wrapper;
  let wrapper2;

  const numberDevices = 4;
  const devices = [
    {
      uid: '1234',
      name: 'hi-23-23-54',
      identity: {
        mac: '00:00:00:00:00:00',
      },
      info: {
        id: 'linuxmint',
        pretty_name: 'Linux Mint 20.0',
        version: '',
      },
      public_key: '---pub key ---',
      tenant_id: '0000000',
      last_seen: '2020-09-21T18:58:53.276Z',
      online: true,
      namespace: 'user',
      status: 'pending',
    },
    {
      uid: '1235',
      name: 'hi-23-23-55',
      identity: {
        mac: '00:00:00:00:00:00',
      },
      info: {
        id: 'linuxmint',
        pretty_name: 'Linux Mint 20.0',
        version: '',
      },
      public_key: '---pub key ---',
      tenant_id: '0000000',
      last_seen: '2020-09-21T18:59:53.276Z',
      online: false,
      namespace: 'user',
      status: 'pending',
    },
    {
      uid: '1236',
      name: 'hi-23-23-56',
      identity: {
        mac: '00:00:00:00:00:00',
      },
      info: {
        id: 'linuxmint',
        pretty_name: 'Linux Mint 20.0',
        version: '',
      },
      public_key: '---pub key ---',
      tenant_id: '0000000',
      last_seen: '2020-09-21T19:58:53.276Z',
      online: false,
      namespace: 'user',
      status: 'pending',
    },
    {
      uid: '1237',
      name: 'hi-23-23-57',
      identity: {
        mac: '00:00:00:00:00:00',
      },
      info: {
        id: 'linuxmint',
        pretty_name: 'Linux Mint 20.0',
        version: '',
      },
      public_key: '---pub key ---',
      tenant_id: '0000000',
      last_seen: '2020-09-21T120:58:53.276Z',
      online: true,
      namespace: 'user',
      status: 'pending',
    },
  ];
  const owner = true;

  const store2 = new Vuex.Store({
    namespaced: true,
    state: {
      devices,
      numberDevices,
      owner: false,
    },
    getters: {
      'devices/list': (state) => state.devices,
      'devices/getNumberDevices': (state) => state.numberDevices,
      'namespaces/owner': (state) => state.owner,
    },
    actions: {
      'modals/showAddDevice': () => {
      },
      'devices/fetch': () => {
      },
      'devices/rename': () => {
      },
      'stats/get': () => {
      },
      'devices/resetListDevices': () => {
      },
    },
  });

  const store = new Vuex.Store({
    namespaced: true,
    state: {
      devices,
      numberDevices,
      owner,
    },
    getters: {
      'devices/list': (state) => state.devices,
      'devices/getNumberDevices': (state) => state.numberDevices,
      'namespaces/owner': (state) => state.owner,
    },
    actions: {
      'modals/showAddDevice': () => {
      },
      'devices/fetch': () => {
      },
      'devices/rename': () => {
      },
      'stats/get': () => {
      },
      'devices/resetListDevices': () => {
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(DevicePendingList, {
      store,
      localVue,
      stubs: ['fragment', 'router-link'],
      vuetify,
    });
  });

  it('Is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  });
  it('Renders the component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Renders the template with data', () => {
    const dt = wrapper.find('[data-test="dataTable-field"]');
    const dataTableProps = dt.vm.$options.propsData;
    expect(dataTableProps.items).toHaveLength(numberDevices);
    expect(wrapper.find('[data-test="field-accept"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="field-reject"]').exists()).toBe(true);
  });
  it('Hides reject and accept button', () => {
    wrapper2 = mount(DevicePendingList, {
      store: store2,
      localVue,
      stubs: ['fragment', 'router-link'],
      vuetify,
    });
    expect(wrapper2.find('[data-test="field-accept"]').exists()).toBe(false);
    expect(wrapper2.find('[data-test="field-reject"]').exists()).toBe(false);
  });
  it('Process data in the computed', () => {
    expect(wrapper.vm.getListPendingDevices).toEqual(devices);
    expect(wrapper.vm.getNumberPendingDevices).toEqual(numberDevices);
  });
});
