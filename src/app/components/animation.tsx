'use client'

// import { useCallback } from 'react';

// import {
//   ReactFlow,
//   ProOptions,
//   ReactFlowProvider,
//   useNodesState,
//   useEdgesState,
//   NodeOrigin,
//   addEdge,
//   OnConnect,
//   Background,
// } from '@xyflow/react';
// import '@xyflow/react/dist/style.css';
// import CentralNode from './nodes/CentralNode';
// import AgentNode from './nodes/AgentNode';
// import { initialEdges, initialNodes } from './nodes/data/intial-elements';
// import useForceLayout from '@/hooks/use-force-layout';


// const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };

// type ExampleProps = {
//   strength?: number;
//   distance?: number;
// };

// const nodeOrigin: NodeOrigin = [0.5, 0.5];

// const defaultEdgeOptions = { style: { stroke: '#d19900', strokeWidth: 2 } };

// const nodeTypes = {
//   central: CentralNode,
//   agent: AgentNode,
// };

// function ReactFlowPro({ strength = -500, distance = 150 }: ExampleProps = {}) {
//   const useNodesResult = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   useForceLayout({ strength, distance });

//   const onConnect: OnConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   return (
//     <ReactFlow
//       nodes={useNodesResult[0]}
//       edges={edges}
//       nodeTypes={nodeTypes}
//       onNodesChange={useNodesResult[2]}
//       onEdgesChange={onEdgesChange}
//       proOptions={proOptions}
//       onConnect={onConnect}
//       onNodeDragStart={() => {}}
//       onNodeDrag={() => {}}
//       onNodeDragStop={() => {}}
//       nodeOrigin={nodeOrigin}
//       defaultEdgeOptions={defaultEdgeOptions}
//       panOnDrag={false}
//       zoomOnDoubleClick={false}
//       zoomOnScroll={false}
//       fitView
//     >
//       <Background />
//     </ReactFlow>
//   );
// }

// function GraphComponent() {

//   return (
//     <ReactFlowProvider>
//       <ReactFlowPro />
//     </ReactFlowProvider>
//   );
// }

// export default GraphComponent;


import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  // addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function GraphComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  console.log(setNodes)
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      // onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}

export default GraphComponent;